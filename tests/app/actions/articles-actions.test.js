import { expect } from 'chai';
import { createStore } from 'redux';

import articlesReducer from '../../../reducers';

import { fetchArticles } from '../../actions';
import { FETCH_ARTICLES } from '../constants/ActionTypes';

describe('Articles reducer', () => {
    
    let testStore;

    const newArticles = [
        {
            "source": {
            "id": null,
            "name": "Forbes.com"
            },
            "author": "Billy Bambrough, Contributor, Billy Bambrough, Contributor https://www.forbes.com/sites/billybambrough/",
            "title": "New Samsung Galaxy S10 And Note10 Models Suddenly Get Surprise Bitcoin Upgrade",
            "description": "Bitcoin users were left disappointed in March when Samsung released its latest Galaxy S10 and Note10 models without bitcoin support on its blockchain-enabled smartphones, shipping with just ethereum and related ERC-20 token capabilities...",
            "url": "https://www.forbes.com/sites/billybambrough/2019/08/15/new-samsung-galaxy-s10-and-note10-models-suddenly-get-surprise-bitcoin-upgrade/",
            "urlToImage": "https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1160312289%2F960x0.jpg",
            "publishedAt": "2019-08-15T23:18:35Z",
            "content": "Bitcoin users were left disappointed in March when Samsung released its latest Galaxy S10 and Note10 models without the expected bitcoin support on its blockchain-enabled smartphones, shipping with just ethereum and related ERC-20 token capabilities.Now, Sams… [+4907 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Cointelegraph.com"
        },
        "author": "Cointelegraph By Max Boddy",
        "title": "Bitcoin Price Shows Signs of Recovery as Altcoin Market Stays Red",
        "description": "Most top cryptocurrencies are still falling in price, while Bitcoin price sees some rebound on the day after drop earlier this week",
        "url": "https://cointelegraph.com/news/bitcoin-price-shows-signs-of-recovery-as-altcoin-market-stays-red",
        "urlToImage": "https://images.cointelegraph.com/images/740_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy8zMDFiMWE5OGJjZmQ0MmIxNTRhYzI0ZDcwMGYxNGExNC5qcGc=.jpg",
        "publishedAt": "2019-08-15T23:15:00Z",
        "content": "Thursday, Aug. 15 — Bitcoin (BTC) is seeing some upward movement as Ether (ETH) and XRP continue to slump.\r\nMarket visualization. Source: Coin360\r\nBitcoin is trading at $10,407 at press time, representing a 0.82% price increase on the day. Bitcoin has ranged … [+2293 chars]"
        }
           
    ]

    beforeEach('Create testing store', () => {
        testStore = createStore(articlesReducer);
      });
    
      describe('Action creator', () => {
        it(`${FETCH_ARTICLES } action type returns correct action`, () => {
          const action = fetchArticles(newArticles);
          expect(action).to.be.deep.equal({
            type: FETCH_ARTICLES,
            articles: articles
          });
        });
      })
    
})