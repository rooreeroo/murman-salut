import StoreModule from "../module";
import { db } from "../../db";

class itemsStore extends StoreModule {
  /**
   * Начальное состояние
   */
  initState() {
    return {
      items: [],
      pItems: [],
      waiting: true,
      categories: [],
      params: {
        page: 1,
        limit: 1000,
        count: 10,
      },
    };
  }
  setParams(params={}) {
    this.setState({
      ...this.getState(),
      waiting: true
    });
    const newParams = {...this.getState().params, ...params};
    let from = (newParams.page-1)*newParams.limit;
    let to = from + newParams.limit;
    if (newParams.page === Math.ceil(newParams.count / Math.max(newParams.limit, 1))) {
      to = from + (newParams.count - from)
    }
    let items = [...this.getState().items];
    try {
      this.setState({
        ...this.getState(),
        pItems: items.slice(from, to),
        params: newParams,
        waiting: false,
      });
    } catch (err) {
      this.setState({
        ...this.getState(),
        waiting: false,
      });
    }

  }

  //тут должна быть еще функция удаления и с id нужно подумать тогда как сделать
  delete(id) {
    const newItems = this.getState().items.filter((item) => item.id !== id);

    this.setState({
      ...this.getState(),
      items: newItems,
      waiting: false,
    });

    db.deleteItem(id);
  }

  async sort(cat, param={}) {
    let params = {...this.getState().params, ...param};
    let from = (params.page-1)*params.limit;
    let to = from+params.limit;
    if (cat === 'all') {
      return this.load()
    } else {
      const items = await db.loadItems();
      // this.setState({
      //   ...this.getState(),
      //   items: items,
      //   pItems: items.slice(from, to),
      //   waiting: false,
      // });
      const newItems = items.filter((item) => item.category === cat);

      this.setState({
        ...this.getState(),
        items: newItems,
        pItems: newItems.slice(from, to),
        category: cat,
        params: {...params, count: newItems.length},
        waiting: false,
      });
    }
  }


  async load() {
    let params = {...this.getState().params};
    let from = (params.page-1)*params.limit;
    let to = from+params.limit;
    this.setState({
      ...this.getState(),
      items: [],
      waiting: true,
    });
    try {
      const items = await db.loadItems();

      this.setState({
        ...this.getState(),
        items: items,
        pItems: items.slice(from, to),
        params: {...this.getState().params, count: items.length},
        waiting: false,
      });
    } catch (err) {
      this.setState({
        ...this.getState(),
        items: [],
        waiting: false,
      });
    }
  }
  async loadCat() {
    try {
      const categories = await db.loadCats();

      this.setState({
        ...this.getState(),
        categories: categories,
        waiting: false,
      });
    } catch (err) {
      this.setState({
        ...this.getState(),
        items: [],
        waiting: false,
      });
    }
  }

  modifyItem(id, data) {
    const newItems = this.getState().items.map((item) =>
      item.id === id ? data : item
    );

    this.setState({
      items: newItems,
      waiting: false,
    });

    db.modifyItem(id, data);
  }

  addItem(product) {
    const items = this.getState().items;
    const newItem = db.addItem(product);

    items.push(newItem);
    // Установка состояние items
    this.setState({
      items,
    });
  }
}
export default itemsStore;
