<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class GalleryController extends Controller
{
    public function indexAction(Request $request)
    {
        $paintings = $this->getDoctrine()->getManager()->getRepository('AdminBundle:Painting')->findBy([], [
            'createdAt' => 'DESC',
        ]);

        return $this->render('AppBundle:Gallery:index.html.twig', [
            'paintings' => $paintings
        ]);
    }
}
