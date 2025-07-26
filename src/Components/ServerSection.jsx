import Game from './Game';
import Heading from './Heading';
import styles from './ServerSection.module.css';

const games = [
  {
    name: "Minecraft Java and Bedrock server",
    desc: "and design epic worlds, create unique gameplay, and bring your community together.",
    high: 'Unleash your creativity',
    features: ["Lowest pricing", "Fastest hardware", "easiest to use"],
    price: 0.74,
  },
  {
    name: "Minecraft Java and Bedrock server",
    desc: "and design epic worlds, create unique gameplay, and bring your community together.",
    high: 'Unleash your creativity',
    features: ["Lowest pricing", "Fastest hardware", "easiest to use"],
    price: 0.74,
  },
  {
    name: "Minecraft Java and Bedrock server",
    desc: "and design epic worlds, create unique gameplay, and bring your community together.",
    high: 'Unleash your creativity',
    features: ["Lowest pricing", "Fastest hardware", "easiest to use"],
    price: 0.74,
  },
  {
    name: "Minecraft Java and Bedrock server",
    desc: "and design epic worlds, create unique gameplay, and bring your community together.",
    high: 'Unleash your creativity',
    features: ["Lowest pricing", "Fastest hardware", "easiest to use"],
    price: 0.74,
  },
  {
    name: "Minecraft Java and Bedrock server",
    desc: "and design epic worlds, create unique gameplay, and bring your community together.",
    high: 'Unleash your creativity',
    features: ["Lowest pricing", "Fastest hardware", "easiest to use"],
    price: 0.74,
  },
];

export default function ServerSection() {
  return <div className={styles.parent}>
    <Heading >What we offer</Heading>
    <div className={styles.gameGrid}>
       {games.map((g,i)=><Game key={i} name={g.name} high={g.high} desc={g.desc} features={g.features} price={g.price} />)}
    </div>
  </div>;
}