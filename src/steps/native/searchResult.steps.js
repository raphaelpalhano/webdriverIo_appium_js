import {  expect } from 'chai';
import { Then } from 'cucumber';
import { SearchResultScreen } from '../../models/screens/SearchResultScreen';


Then(`deve exibir o produto {string}`, async (productName) => {
  const result = await SearchResultScreen.productNameInCard(productName);
  await expect(result).to.be.eq(productName);
});


Then(`deve exibir o valor {string}`, async (value) => {
  const result = await  SearchResultScreen.getTextResult(value);
  await expect(result).to.be.eq(value);
  //
});


Then('deve exibir um resultado maior que zero', async () => {
  const result = SearchResultScreen.getStaticResult();
  await expect(result).not.eq('0 produtos');
});
