import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BitcoinService {

    async getRate() {
        const rate = JSON.parse(localStorage.getItem('rate'))
        if (!rate) {
            try {
                const res = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
                console.log(res);
                localStorage.setItem('rate', JSON.stringify(res.data))
                return res.data
            } catch (err) {
                console.log('err in get rate', err);
            }
        } else return rate
    }

}