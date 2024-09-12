'use client';

type Props = {
  title: string;
  children?: React.ReactNode;
};

export function Links({ title, children }: Props) {
  return (
    <div className="col-lg-2 col-md-3 footer-links">
      <h4>{title}</h4>
      {children}
    </div>
  );
}

export default Links;
