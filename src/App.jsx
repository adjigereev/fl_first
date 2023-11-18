import './App.css';
import { Header } from './components/Header';
import CartProduct from './components/cart/cartProduct/cartProduct';
import CartRelatedProduct from './components/cart/relatedProducts/cartProduct';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container mx-auto mt-[15px] flex'>
        <div className='main_sidebar '>
          Корзина
        </div>
        <div className='ml-[12px] '>
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </div>
      </div>
      <div className='container mx-auto  flex '>
        <div className='sidebar_second'>
          <p>Место для рекламы другого товара</p>
        </div>
        <div>

          <div className='ml-[12px] justify-center flex w-full '>
            <div className='block_garant flex'>
              <div className='block_garant_first '>
                <div className='flex justify-around title'>
                  <h2>В корзине 3 товара:</h2>
                  <p>49 997₽</p>
                </div>
                <div>
                  <ul className='garant_ul'>
                    <li className='pt-[22px] ml-[30px] flex justify-around '>
                      <div className='w-[25px] h-[26px] bg-white border border-[#D9D9D9] border-[5px]'></div>
                      <div className='title_garant'>Оформить гарантию</div>
                      <p className='title_garant'>+ 5000₽</p>
                    </li>
                    <li className='mt-[22px] ml-[30px] flex justify-around'>
                      <div className='w-[25px] h-[26px] bg-white border border-[#D9D9D9] border-[5px]'></div>
                      <div className='title_garant'>Оформить доставку</div>
                      <p className='title_garant'>+  1500₽</p>
                    </li>
                    <li className='mt-[22px] ml-[30px] flex justify-around'>
                      <div className='w-[25px] h-[26px] bg-white border border-[#D9D9D9] border-[5px]'></div>
                      <div className='title_garant'>Оформить гарантию</div>
                      <p className='title_garant'>+ 5000₽</p>
                    </li>
                    <li className='mt-[22px] ml-[30px] flex justify-around pb-[29px]'>
                      <div className='w-[25px] h-[26px] bg-white border border-[#D9D9D9] border-[5px]'></div>
                      <div className='title_garant'>Оформить гарантию</div>
                      <p className='title_garant'>+ 5000₽</p>
                    </li>
                  </ul>
                  <div className='garant_button'>
                    <button className=''>Вернутся к каталогу</button>
                  </div>
                </div>
              </div>
              <div className='block_garant_second'>
                <p className='block_garant_second__title'>Возникли вопросы?</p>
                <div className='flex mt-[24px] ml-[11px]  '>
                  <ul className=' '>
                    <li className='flex items-center mb-[24px]'>
                      <p className='mr-[12px] w-[9px] h-[9px] bg-[#507EF4] rounded-full'></p>
                      <a href="#" className='text-[#507EF4]'>Условия оплаты </a></li>
                    <li className='flex items-center mb-[24px]'>
                      <p className='mr-[12px] w-[9px] h-[9px] bg-[#507EF4] rounded-full'></p>
                      <a className='text-[#507EF4]' href="#">Договор о доставке </a></li>
                    <li className='flex items-center mb-[24px]'>
                      <p className='mr-[12px] w-[9px] h-[9px] bg-[#507EF4] rounded-full'></p>
                      <a className='text-[#507EF4]' href="#">FAQ</a></li>
                  </ul>
                </div>
                <button >Перейти к оформлению</button>
              </div>
            </div>

          </div>
          <div className='bg-[#C2F2F2]  mt-[12px] ml-[11px] rounded-[20px]'>
            <h3 className='title_relative_products'>Также вы недавно смотрели:</h3>
            <CartRelatedProduct />
            <CartRelatedProduct />
            <CartRelatedProduct />
            <CartRelatedProduct />
          </div>
        </div>
      </div>
      <footer className='footer'>
        Футер
      </footer>
    </div>
  );
}

export default App;
