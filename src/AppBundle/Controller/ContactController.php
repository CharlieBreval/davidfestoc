<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;

class ContactController extends Controller
{
    public function indexAction(Request $request)
    {
        $success = false;
        $error = false;

        $form = $this->createFormBuilder()
            ->add('email', EmailType::class, array(
                'required' => true
            ))
            ->add('message', TextType::class, array(
                'required' => true
            ))
        ->getForm();

        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            if ($form->isValid() && $form->get('email')->getData() !== null) {
                $body = '<html><body>';
                $body .= 'Message from '.$form->get('email')->getData().'<br><br>';
                $body .= nl2br($form->get('message')->getData()).'</body></html>';

                $message = \Swift_Message::newInstance()
                    ->setSubject('Contact from davidfestoc.com by '.$form->get('email')->getData())
                    ->setFrom('bonjour@charliebreval.com')
                    ->setTo('david.festoc@laposte.net')
                    ->setBody($body,'text/html')
                ;

                $mailStatus = $this->get('mailer')->send($message);

                if($mailStatus) {
                    $success = true;
                }
            } else {
                $error = true;
            }
        }

        return $this->render('AppBundle:contact-form:contact.html.twig', [
            'form' => $form->createView(),
            'success' => $success,
            'error' => $error
        ]);
    }
}
