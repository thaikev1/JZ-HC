
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import menu_data from './MenuData';

type DataType = {
  style_2?: any,
  style_3?: any,
}
const NavMenu = ({ style_2, style_3 }: DataType) => {
  return (
    <>
      <ul>
        {menu_data.map((item, i) =>
          <li key={i} className={`${item.has_dropdown || item.img_dropdown ? "has-dropdown" : ""}`}>
            <Link href={item.link}>{item.title}</Link>
            {item.img_dropdown &&
              <div className={`tp-submenu submenu has-homemenu ${style_2 | style_3 ? "" : "has-homemenu-2"}`}>
                <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-xl-5">
                  {item.sub_menus?.map((sub_menu, sub_i) =>
                    <div key={sub_i} className={`col homemenu ${sub_i === 0 ? "active" : ""}`}>

                      <div className="homemenu-thumb mb-15">
                        <Image src={sub_menu.demo_img} style={{ width: '100%', height: 'auto' }} alt="image-title" />
                        <div className="homemenu-btn">
                          {sub_i !== 4 &&
                            <React.Fragment>
                              <Link className="tp-menu-btn" href={sub_menu.link}>Multi Page</Link>
                              <Link className="tp-menu-btn" href={sub_menu.one_page_link}>One Page</Link>
                            </React.Fragment>
                          }
                          {sub_i === 4 &&
                            <Link className="tp-menu-btn" href={sub_menu.link}>View Page</Link>
                          }
                        </div>
                      </div>
                      <div className="homemenu-content text-center">
                        <h4 className="homemenu-title">
                          <Link href={sub_menu.link}>{sub_menu.title}</Link>
                        </h4>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            }
            {item.has_dropdown &&
              <ul className="submenu tp-submenu">
                {item.sub_menus?.map((sub_item, sub_index) =>
                  <li key={sub_index}><Link href={sub_item.link}>{sub_item.title}</Link></li>
                )}
              </ul>
            }
          </li>
        )}
      </ul>
    </>
  );
};

export default NavMenu;