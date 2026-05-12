<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Repository\CardRepository;


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
}
