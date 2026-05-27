<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;

class RegistrationController extends AbstractController
{
    #[Route('/api/register', name: 'api_register', methods: ['POST'])]
    public function register(
        Request $request, 
        UserPasswordHasherInterface $userPasswordHasher, 
        EntityManagerInterface $entityManager,
        UserRepository $userRepository
    ): JsonResponse {
        $data = json_decode($request->getContent(), true);

        if (!$data) {
            return new JsonResponse(['message' => 'Données invalides.'], 400);
        }

        $pseudo = $data['pseudo'] ?? null;
        $email = $data['email'] ?? null;
        $password = $data['password'] ?? null;

        if (!$pseudo || !$email || !$password) {
            return new JsonResponse(['message' => 'Tous les champs sont obligatoires.'], 400);
        }

        $existingEmail = $userRepository->findOneBy(['email' => $email]);
        if ($existingEmail) {
            return new JsonResponse(['message' => 'Cette adresse email est déjà utilisée.'], 400);
        }

        $existingPseudo = $userRepository->findOneBy(['pseudo' => $pseudo]);
        if ($existingPseudo) {
            return new JsonResponse(['message' => 'Ce pseudo est déjà pris.'], 400);
        }

        // 4. Si tout est OK, création de l'utilisateur
        $user = new User();
        $user->setPseudo($pseudo);
        $user->setEmail($email);

        // Hachage du mot de passe
        $hashedPassword = $userPasswordHasher->hashPassword($user, $password);
        $user->setPassword($hashedPassword);

        // Sauvegarde dans la base de données
        $entityManager->persist($user);
        $entityManager->flush();

        // On retourne un message de succès à React
        return new JsonResponse(['message' => 'Inscription réussie !'], 201);
    }
}