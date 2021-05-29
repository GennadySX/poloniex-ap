import {MainScreen} from '../screens/Main';
import CatalogScreen from '../screens/Catalog';

export enum Routes {
  Main = 'О приложении',
  Catalog = 'Котировки',
}

export const Screens = [
  {
    name: Routes.Main,
    component: MainScreen,
  },
  {
    name: Routes.Catalog,
    component: CatalogScreen,
  },
];

export const RouteActive: Routes = Routes.Main;
