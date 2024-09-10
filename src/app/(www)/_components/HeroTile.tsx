'use client';

type Props = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
};

export function HeroTile({ icon, title, children }: Props) {
  return (
    <div className="col-xl-4 d-flex align-items-stretch">
      <div className="icon-box" data-aos="zoom-out" data-aos-delay="300">
        {icon}
        <h4>{title}</h4>
        {children}
      </div>
    </div>
  );
}

export default HeroTile;
