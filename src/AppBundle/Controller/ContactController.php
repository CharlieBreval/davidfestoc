<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class ContactController extends Controller
{
    public function indexAction(Request $request)
    {
        $success = false;
        if ($request->getMethod() === 'POST') {

            $body = '<html><body>'.nl2br($request->request->get('message'))."</body></html>";

            $message = \Swift_Message::newInstance()
                ->setSubject('Contact from davidfestoc.com')
                ->setFrom($request->request->get('email'))
                ->setTo('charliebreval@yahoo.fr')
                ->setBody($body,'text/html')
            ;
            $mailStatus = $this->get('mailer')->send($message);

            if($mailStatus) {
                $success = true;
            }
        }


        return $this->render('AppBundle:contact-form:contact.html.twig', [
            'success' => $success
        ]);
    }
}
