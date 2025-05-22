export interface Post {
  slug: string;
  title: string;
  content: JSX.Element;
}

export const posts: Post[] = [
  {
    slug: 'importance-of-play',
    title: 'The Importance of Play in Child Development',
    content: (
      <>
        <p>Play is a fundamental part of a child's growth and development. Through play, children learn to explore their environment, develop social skills, and build physical and cognitive abilities.</p>
        <p>Engaging in imaginative play helps foster creativity and problem-solving skills. It also provides opportunities for cooperation and communication as children interact with peers.</p>
        <p>Parents can encourage play by providing safe spaces, diverse toys, and unstructured time. Observing and participating in play can strengthen the parent-child bond.</p>
      </>
    ),
  },
  {
    slug: 'choosing-the-perfect-nanny',
    title: 'Choosing the Perfect Nanny: Tips for Parents',
    content: (
      <>
        <p>Finding the right nanny can be a daunting task. It's important to establish clear criteria based on your family's needs and values.</p>
        <p>Conduct thorough interviews and background checks. Ask for references, verify qualifications, and discuss emergency protocols.</p>
        <p>Trust your instincts and look for a nanny who demonstrates reliability, empathy, and communication skills. A trial period can help ensure a good fit.</p>
      </>
    ),
  },
  {
    slug: 'balancing-work-and-parenthood',
    title: 'Balancing Work and Parenthood: Strategies for Success',
    content: (
      <>
        <p>Juggling professional responsibilities and family life can be challenging. Setting realistic expectations and boundaries is key.</p>
        <p>Use calendars and shared to-do lists to organize schedules. Coordinate with partners or childcare providers to ensure coverage.</p>
        <p>Make time for self-care and quality family interactions. Flexibility, delegation, and open communication can help maintain balance.</p>
      </>
    ),
  },
  {
    slug: 'healthy-sleep-habits',
    title: 'Cultivating Healthy Sleep Habits in Children',
    content: (
      <>
        <p>Consistent sleep routines are essential for a child's health and development. Establishing bedtime rituals can signal readiness for sleep.</p>
        <p>Ensure a comfortable sleep environment: dim lights, minimal noise, and a consistent temperature.</p>
        <p>Limit screen time before bed and introduce calming activities like reading or gentle stretches. Patience and consistency will yield the best results.</p>
      </>
    ),
  },
  {
    slug: 'nutrition-101',
    title: 'Nutrition 101: Feeding Your Growing Child',
    content: (
      <>
        <p>A balanced diet provides the nutrients children need for growth and energy. Include a variety of fruits, vegetables, whole grains, and lean proteins.</p>
        <p>Encourage healthy eating habits by offering new foods repeatedly and involving children in meal preparation.</p>
        <p>Avoid sugary snacks and processed foods. Hydration is also important – water should be the primary beverage.</p>
      </>
    ),
  },
]; 