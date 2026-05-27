<?php

namespace App\Controller;

use App\Form\Type\CardType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Repository\CardRepository;
use App\Entity\Card;
use Doctrine\ORM\EntityManagerInterface;

class CardController extends AbstractController
{
    #[Route('/cards', name: 'card_list')]
    public function list(CardRepository $cardRepository): Response
    {
        $cards = $cardRepository->findAll();

        return $this->render('cards/list.html.twig', [
            'cards' => $cards
        ]);
    }

    #[Route('/cards/Create', name: 'card_create')]
    public function create(Request $request, EntityManagerInterface $em): Response
    {
        $card = new Card();
        $form = $this->createForm(CardType::class, $card);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $em->persist($card);
            $em->flush();
            return $this->redirectToRoute('card_list');
        }

        return $this->render('cards/create.html.twig', [
            'form' => $form
        ]);
    }

    #[Route('/cards/{id}/edit', name: 'card_edit')]
    public function edit(int $id, Request $request, CardRepository $cardRepository, EntityManagerInterface $em): Response
    {
        $card = $cardRepository->find($id);

        if (!$card) {
            throw $this->createNotFoundException('Card not found');
        }

        $form = $this->createForm(CardType::class, $card);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em->flush();
            return $this->redirectToRoute('card_list');
        }

        return $this->render('cards/edit.html.twig', [
            'form' => $form
        ]);
    }

    #[Route('/cards/{id}/delete', name: 'card_delete', methods: ['POST'])]
    public function delete(int $id, CardRepository $cardRepository, EntityManagerInterface $em): Response
    {
        $card = $cardRepository->find($id);

        if (!$card) {
            throw $this->createNotFoundException('Card not found');
        }

        $em->remove($card);
        $em->flush();

        return $this->redirectToRoute('card_list');
    }
}
