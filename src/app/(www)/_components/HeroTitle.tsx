'use client';

type Props = {
  title: string;
  subtitle: string;
};

export function HeroTitle({ title, subtitle }: Props) {
  return (
    <div className="welcome position-relative">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

export default HeroTitle;
