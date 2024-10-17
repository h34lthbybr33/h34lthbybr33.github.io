'use client';

import React from 'react';
import Link from 'next/link';

import { Section, SectionTitle, type TabProps } from '.';
import Image from 'next/image';

export interface TabsProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  title: string;
  subtitle?: string;
  activeTabIndex?: number;
  children?: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({
  id,
  title,
  subtitle,
  activeTabIndex = 0,
  children,
  className,
  ...props
}) => {
  const [activeTab, setActiveTab] = React.useState<number>(activeTabIndex || 0);
  const isTab = (el: React.ReactNode): el is React.ReactElement<TabProps> => {
    return !!el;
  };

  const allTabs = React.useMemo(() => {
    return React.Children.toArray(children).filter(isTab);
  }, [children]);
  const tabs = React.useMemo(() => {
    return allTabs.map((tab, index) => ({
      id: tab.props.id,
      title: tab.props.title,
      index,
    }));
  }, [allTabs]);

  const handleTabClick = (index: number): React.MouseEventHandler => {
    return (e: React.MouseEvent) => {
      setActiveTab(index);
      e.preventDefault();
    };
  };

  return (
    <Section id={id} name="departments" className={className} {...props}>
      <SectionTitle title={title}>{subtitle && <p>{subtitle}</p>}</SectionTitle>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              {tabs.map(({ title, id }, key) => (
                <li key={key} className="nav-item">
                  <Link
                    href={`#${id}`}
                    className={`nav-link ${key == activeTab ? 'active show' : ''}`}
                    onClick={handleTabClick(key)}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="tab-content">
              {allTabs.map((child, key) => {
                return (
                  <div
                    key={key}
                    className={`tab-pane ${key == activeTab ? 'active show' : ''}`}
                    id={child.props.id}>
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">{child}</div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <Image
                          src={child.props.image}
                          alt={child.props.title}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

Tabs.displayName = 'Tabs';

export default Tabs;
