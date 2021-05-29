import {action, observable, makeObservable, runInAction} from 'mobx';
import {ItemType} from '../types/Item';
import {API} from '../constants/API';

class DataStore {
  data: ItemType[] = [];
  error: boolean = false;
  fetchInterval: any = 0;
  loading = false;

  fetchInitData() {
    return fetch(API.catalog());
  }

  jsonData(data: any) {
    return data.json();
  }

  @action.bound
  mapObjects(obj: any) {
    return Object.keys(obj).map((key, index) =>
      this.getBy(obj[key], key, index),
    );
  }

  getBy(
    {last, highestBid, percentChange}: any,
    key: string,
    index: number,
  ): ItemType {
    return {
      index,
      name: key,
      last,
      highestBid,
      percentChange,
    };
  }

  async fetchData() {
    try {
      runInAction(() => {
        this.error = false;
        this.loading = true;
        console.log('loading data...');
        console.log(' this.loading...', this.loading);
        console.log('this.error...', this.error);
      });
      const response = await this.fetchInitData();
      const json = await this.jsonData(response);
      const map = await this.mapObjects(json);
      runInAction(() => {
        this.loading = false;
        this.data = [...map];
      });
    } catch (err) {
      console.log(err);
      runInAction(() => {
        this.loading = false;
        this.error = !!err;
      });
    }
  }
  @action
  resetState() {
    runInAction(() => {
      this.data = [];
      this.error = false;
      this.loading = true;
    });
  }

  @action
  startFetch = () => {
    this.fetchData();
  };

  @action
  resetFetch() {
    this.resetState();
  }

  constructor() {
    makeObservable(this, {
      data: observable,
      fetchInterval: observable,
      loading: observable,
      error: observable,
      startFetch: action,
      fetchInitData: action,
      fetchData: action,
      resetFetch: action,
    });
  }
}

const store = new DataStore();
export default store;
