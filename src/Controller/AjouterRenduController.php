<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AjouterRenduController extends AbstractController
{
    #[Route('/ajouter/rendu', name: 'app_ajouter_rendu')]
    public function index(): Response
    {
        return $this->render('ajouter_rendu/index.html.twig', [
            'controller_name' => 'AjouterRenduController',
        ]);
    }
}
