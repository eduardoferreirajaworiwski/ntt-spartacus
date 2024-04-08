import { ChangeDetectionStrategy, Component} from '@angular/core';
import { CmsSearchBoxComponent, RoutingService, WindowRef } from '@spartacus/core';
import { SearchBoxComponent } from '@spartacus/storefront';
import { CmsComponentData } from '@spartacus/storefront';
import { SearchBoxComponentService } from '@spartacus/storefront';
import { SearchBoxConfig} from '@spartacus/storefront';

const DEFAULT_SEARCH_BOX_CONFIG: SearchBoxConfig = {
  minCharactersBeforeRequest: 1,
  displayProducts: true,
  displaySuggestions: true,
  maxProducts: 5,
  maxSuggestions: 5,
  displayProductImages: true,
};

@Component({
  selector: 'cx-searchbox',
  templateUrl: './custom-search-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./custom-search-box.component.scss'],
})
export class CustomSearchBoxComponent extends SearchBoxComponent {

  constructor(
    searchBoxComponentService: SearchBoxComponentService,
    componentData: CmsComponentData<CmsSearchBoxComponent>,
    winRef: WindowRef,
    routingService: RoutingService
  ) {
    super(searchBoxComponentService, componentData, winRef, routingService);
  }  
}
