<?php

namespace App\Form\Type;

use App\Entity\Card;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\FormBuilderInterface;

class CardType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class)
            ->add('rarity', ChoiceType::class, [
                'choices' => [
                    'Bronze' => 'Bronze',
                    'Fer' => 'Fer',
                    'Or' => 'Or',
                    'Diamant' => 'Diamant'
                ]
            ])
            ->add('type', ChoiceType::class, [
                'choices' => [
                    'Paysage' => 'Paysage',
                    'Mob' => 'Mob',
                    'Objets' => 'Objets'
                ]
            ])
            ->add('description', TextType::class, [
                'required' => false
            ])
            ->add('image', TextType::class, [
                'required' => false
            ])
            ->add('save', SubmitType::class)
        ;
    }
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Card::class,
        ]);
    }
}
