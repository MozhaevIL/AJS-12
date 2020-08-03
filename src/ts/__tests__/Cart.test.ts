import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Buyable from '../domain/Buyable';

  
const testCart = new Cart;

const testMovie = new Movie(
  123,
  'Test',
  2020,
  'Netology',
  'This is test object!',
  ['fantasy', 'horror'],
  666,
  100,
  );

  const testMovie2 = new Movie(
    234,
    'Test2',
    2020,
    'Netology',
    'This is test object!',
    ['fantasy', 'horror'],
    666,
    200,
    );

    
testCart.add(testMovie2);

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('should add new movie in cart and correctly return cart contents', () => {
 

  testCart.add(testMovie);

  const expected:Buyable[] = [testMovie2, testMovie];

  const recieved:Buyable[] = testCart.items;

  expect(recieved).toEqual(expected);
});

test('should calculate total price of cart', () => {
 
  const expected:number = 300;

  const recieved = testCart.getTotalPrice();

  expect(recieved).toEqual(expected);
});

test('should calculate total price of cart with discount', () => {
 
  const expected:number = 210;

  const recieved:number = testCart.getTotalDiscountedPrice(30);

  expect(recieved).toEqual(expected);
});

test('should delete item from cart by id', () => {
 
  testCart.delete(234);
  
  const expected:Buyable[] = [testMovie];

  const recieved:Buyable[] = testCart.items;

  expect(recieved).toEqual(expected);
});

test('should throw an error when deleting with wrong id', () => {
  expect(()=>{
    testCart.delete(1);
  }).toThrow('id не найден');
});
