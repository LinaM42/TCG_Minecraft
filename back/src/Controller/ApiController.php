<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\CardRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;

final class ApiController extends AbstractController
{
    #[Route('/api/cards', name: 'app_api_cards')]
    public function list(CardRepository $cardRepository): Response
    {
        $cards = $cardRepository->findAll();
        return $this->json($cards, 200, [], ['groups' => 'card:read']);
    }

    #[Route('/api/cards/{id}', name: 'app_api_card')]
    public function get(CardRepository $cardRepository, int $id): Response
    {
        $card = $cardRepository->find($id);
        if (!$card) {
            return $this->json(['message' => 'Card not found'], 404);
        }
        return $this->json($card, 200, [], ['groups' => 'card:read']);
    }

    #[Route('/api/register', name: 'api_register', methods: ['POST'])]
    public function register(
        Request $request,
        UserPasswordHasherInterface $hasher,
        EntityManagerInterface $em
    ): JsonResponse {
        $data = json_decode($request->getContent(), true);

        if (empty($data['email']) || empty($data['password']) || empty($data['pseudo'])) {
            return $this->json(['error' => 'Champs manquants.'], 400);
        }

        $user = new User();
        $user->setEmail($data['email']);
        $user->setUsername($data['pseudo']);
        $user->setPassword($hasher->hashPassword($user, $data['password']));

        $em->persist($user);
        $em->flush();

        return $this->json(['message' => 'Compte créé avec succès !'], 201);
    }
}
