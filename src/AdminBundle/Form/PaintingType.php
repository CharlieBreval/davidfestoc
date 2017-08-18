<?php

namespace AdminBundle\Form;

use Ivory\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PaintingType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $years = [];
        for ($i=1980; $i < 2030; $i++) {
            $years[] = $i;
        }

        $builder
            ->add('title')
            ->add('titleEn')
            ->add('createdAt', DateType::class, array(
                'years' => $years
            ));
        ;

        if ($options['type'] !== null && $options['type'] === 'new') {
            $builder
                ->add('thumbnail', FileType::class, array('label' => 'Image miniature 300px / 300px'))
                ->add('image', FileType::class, array('label' => 'Image grand format'))
            ;
        }
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'type' => null,
            'data_class' => 'AdminBundle\Entity\Painting'
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'adminbundle_painting';
    }


}
