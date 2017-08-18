<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class MenuController extends Controller
{
    /**
     * Action : Display the home
     *
     * @param  Request $request
     * @return Response
     */
    public function menuAction(Request $request)
    {
        $locale        = $request->getLocale();
        $stack         = $this->get('request_stack');
        $masterRequest = $stack->getMasterRequest();
        $currentRoute  = $masterRequest->get('_route');

        return $this->render('AppBundle:Menu:menu.html.twig', [
            'currentRoute' => $currentRoute
        ]);
    }
}
