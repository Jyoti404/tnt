import React, { useEffect, useState } from 'react';
import './ProductPage.css'; // Import your CSS file here
import { TweenMax, Power3, Expo } from 'gsap';

const Products = () => {
    const [category, setCategory] = useState('data-loggers');
    const [productsData, setProductsData] = useState([]);
    const [displayHeader, setDisplayHeader] = useState(false);

    const initialProductsData = {
        'rtd-sensor': [
            { name: 'Product A', price: 30, img: 'IMG_20240227_010648.png' },
            { name: 'Product B', price: 40, img: 'datalogger.png' }
        ],
        'thermo-couples': [
            { name: 'Product C', price: 25, img: 'hum-sensor.png' },
            { name: 'Product D', price: 35, img: 'IMG20211230185627.png' }
        ], 'indicators': [
          { name: 'UNILOG PRO PLUS', price: 45, img: 'IMG_20240227_010648.png' },
          { name: 'UNIREC', price: 55, img: 'hum-sensor.png' },
          { name: 'UNIREC PRO', price: 65, img: 'TrmoCpl.png' }

      ],
      'pid-controller': [
          { name: 'Product G', price: 60, img: 'IMG_20240227_010648.png' },
          { name: 'Product H', price: 70, img: 'hum-sensor.png' }

      ],
      'scanner': [
          { name: 'UNILOG PRO PLUS', price: 45, img: 'IMG_20240227_010648.png' },
          { name: 'UNIREC', price: 55, img: 'hum-sensor.png' },
          { name: 'UNIREC PRO', price: 65, img: 'TrmoCpl.png' }

      ],
      'humidity': [
          { name: 'UNILOG PRO PLUS', price: 45, img: 'IMG_20240227_010648.png' },
          { name: 'UNIREC', price: 55, img: 'hum-sensor.png' },
          { name: 'UNIREC PRO', price: 65, img: 'TrmoCpl.png' }

      ],
      'spare-parts': [
          { name: 'UNILOG PRO PLUS', price: 45, img: 'IMG_20240227_010648.png' },
          { name: 'UNIREC', price: 55, img: 'hum-sensor.png' },
          { name: 'UNIREC PRO', price: 65, img: 'TrmoCpl.png' }

      ],
      'USB-Converter': [
          { name: 'UNILOG PRO PLUS', price: 45, img: 'IMG_20240227_010648.png' },
          { name: 'UNIREC', price: 55, img: 'hum-sensor.png' },
          { name: 'UNIREC PRO', price: 65, img: 'TrmoCpl.png' }

      ],
      'indicators': [
          { name: 'UNILOG PRO PLUS', price: 45, img: 'IMG_20240227_010648.png' },
          { name: 'UNIREC', price: 55, img: 'hum-sensor.png' },
          { name: 'UNIREC PRO', price: 65, img: 'TrmoCpl.png' }

      ],
      'Ethernet-Converter': [
          { name: 'UNILOG PRO PLUS', price: 45, img: 'IMG_20240227_010648.png' },
          { name: 'UNIREC', price: 55, img: 'hum-sensor.png' },
          { name: 'UNIREC PRO', price: 65, img: 'TrmoCpl.png' }

      ],
      'SMPS': [
          { name: 'UNILOG PRO PLUS', price: 45, img: 'IMG_20240227_010648.png' },
          { name: 'UNIREC', price: 55, img: 'hum-sensor.png' },
          { name: 'UNIREC PRO', price: 65, img: 'TrmoCpl.png' }

      ],
      'proximity': [
          { name: 'UNILOG PRO PLUS', price: 45, img: 'IMG_20240227_010648.png' },
          { name: 'UNIREC', price: 55, img: 'hum-sensor.png' },
          { name: 'UNIREC PRO', price: 65, img: 'TrmoCpl.png' }

      ],
      'traverse-unit': [
          { name: 'UNILOG PRO PLUS', price: 45, img: 'IMG_20240227_010648.png' },
          { name: 'UNIREC', price: 55, img: 'hum-sensor.png' },
          { name: 'UNIREC PRO', price: 65, img: 'TrmoCpl.png' }

      ]
  };


    useEffect(() => {
        TweenMax.from(".logo", 1, {
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
        });

        TweenMax.staggerFrom(".nav-links-desktop ul li", 1, {
            opacity: 0,
            x: -20,
            ease: Power3.easeInOut
        }, 0.08);

        setProductsData(initialProductsData);
    }, []);

    useEffect(() => {
        showCategory(category);
    }, [category]);

    const showCategory = (category) => {
        setCategory(category);
    };

    const hide = () => {
        document.querySelector('.card-hidden').style.display = 'none';
    };

    const show = () => {
        document.querySelector('.card-hidden').style.display = 'flex';
    };

    const add = (content) => {
        setDisplayHeader(true);
        document.getElementById('target-h1').textContent = content;
    };

    return (
        <div>
            <div className="mid">
                <div className="head" style={{ display: displayHeader ? 'flex' : 'none' }}>
                    <h1 id="target-h1"></h1>
                </div>
            </div>
            <section className="container">
                <div className="product-categories">
                    <div className="category-list">
                        <h3 className="product-heading">Product Categories</h3>
                        <hr />
                        <ul>
                            {Object.keys(initialProductsData).map(key => (
                                <li key={key} className="open" onClick={() => { add(key); hide(); showCategory(key); }}>{key.replace('-', ' ')}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="products">
                        <div className="card-hidden">
                            <div className="container-second">
                                <div className="card-3d">
                                    <div className="logo-3d">
                                        <span className="circle circle2"></span>
                                        <span className="circle circle3"></span>
                                        <span className="circle circle4"></span>
                                        <span className="circle circle5">
                                            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="glass">
                                        <div className="test">
                                            <div className="test2">
                                                <img src="src\components\Images\itm2.png" alt="" />
                                            </div>
                                            <div className="test3">
                                                <h3><i onClick={() => { add('thermo-couples'); hide(); showCategory('thermo-couples'); }}>RTD Sensors</i></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-second">
                                <div className="card-3d">
                                    <div className="logo-3d">
                                        <span className="circle circle2"></span>
                                        <span className="circle circle3"></span>
                                        <span className="circle circle4"></span>
                                        <span className="circle circle5">
                                            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="glass">
                                        <div className="test">
                                            <div className="test2">
                                                <img src="src\components\Images\itm2.png" alt="" />
                                            </div>
                                            <div className="test3">
                                                <h3><i onClick={() => { add('thermo-couples'); hide(); showCategory('thermo-couples'); }}>RTD Sensors</i></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-second">
                                <div className="card-3d">
                                    <div className="logo-3d">
                                        <span className="circle circle2"></span>
                                        <span className="circle circle3"></span>
                                        <span className="circle circle4"></span>
                                        <span className="circle circle5">
                                            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="glass">
                                        <div className="test">
                                            <div className="test2">
                                                <img src="src\components\Images\itm2.png" alt="" />
                                            </div>
                                            <div className="test3">
                                                <h3><i onClick={() => { add('thermo-couples'); hide(); showCategory('thermo-couples'); }}>RTD Sensors</i></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-second">
                                <div className="card-3d">
                                    <div className="logo-3d">
                                        <span className="circle circle2"></span>
                                        <span className="circle circle3"></span>
                                        <span className="circle circle4"></span>
                                        <span className="circle circle5">
                                            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="glass">
                                        <div className="test">
                                            <div className="test2">
                                                <img src="src\components\Images\itm2.png" alt="" />
                                            </div>

                                            <div className="test3">
                                                <h3><i onClick={() => { add('thermo-couples'); hide(); showCategory('thermo-couples'); }}>RTD Sensors</i></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-second">
                                <div className="card-3d">
                                    <div className="logo-3d">
                                        <span className="circle circle2"></span>
                                        <span className="circle circle3"></span>
                                        <span className="circle circle4"></span>
                                        <span className="circle circle5">
                                            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="glass">
                                        <div className="test">
                                            <div className="test2">
                                                <img src="src\components\Images\itm2.png" alt="" />
                                            </div>
                                            <div className="test3">
                                                <h3><i onClick={() => { add('thermo-couples'); hide(); showCategory('thermo-couples'); }}>RTD Sensors</i></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-second">
                                <div className="card-3d">
                                    <div className="logo-3d">
                                        <span className="circle circle2"></span>
                                        <span className="circle circle3"></span>
                                        <span className="circle circle4"></span>
                                        <span className="circle circle5">
                                            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="glass">
                                        <div className="test">
                                            <div className="test2">
                                                <img src="src\components\Images\itm2.png" alt="" />
                                            </div>
                                            <div className="test3">
                                                <h3><i onClick={() => { add('thermo-couples'); hide(); showCategory('thermo-couples'); }}>RTD Sensors</i></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Add more similar containers for other cards... */}
                        </div>
                        <div id="product-list">
                            {productsData[category]?.map((product, index) => (
                                <div key={index} className="product-item" data-price={product.price} data-name={product.name}>
                                    <img src={product.img} alt={product.name} />
                                    <div className="details">
                                        <h3>{product.name}</h3>
                                    </div>
                                    <div className="button-container">
                                        <button>Learn More</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
