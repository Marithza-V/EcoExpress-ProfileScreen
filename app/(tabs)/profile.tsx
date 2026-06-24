import Screen from '@/components/Screen';
import EcoExpressGreeting from '@/components/EcoExpressGreeting';
import ProfileCard from '@/components/ProfileCard';

export default function ProfileScreen() {
  return (
    <Screen>
      <EcoExpressGreeting name='Priscila' lastName='Rodriguez'/>
      <ProfileCard
        name='Priscila'
        lastName='Rodriguez'
        email='priscilarodriguez26@gmail.com'
      />
    </Screen>
  );
}
