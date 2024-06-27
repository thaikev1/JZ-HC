

import project_data from '@/data/project_data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const projects = project_data.filter(item => item.path === 'project')

const ProjectArea = () => {
  return (
    <>
      <div className="tp-project-area p-relative pt-120 pb-90">
        <div className="tp-project-shape-1 d-none d-xl-block">
          <img src="assets/img/project/shape-1-1.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            {projects.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-30  wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={item.delay}>
                <div className="tp-project-item p-relative">
                  <div className="tp-project-thumb">
                    <Image src={item.img} style={{height: 'auto'}} alt="" />
                  </div>
                  <div className="tp-project-content">
                    <Link href="/project-details"><i className="flaticon-right-arrow"></i></Link>
                    <span>{item.category}</span>
                    <h4 className="tp-project-title"><Link href="/project-details">{item.title}</Link></h4>
                  </div>
                </div>
              </div>
            ))} 
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectArea;