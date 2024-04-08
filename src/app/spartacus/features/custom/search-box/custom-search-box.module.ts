import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CmsConfig,
  I18nModule,
  provideDefaultConfig,
  UrlModule,
} from '@spartacus/core';
import { MediaModule } from '@spartacus/storefront';
import { IconModule } from '@spartacus/storefront';
import { CustomSearchBoxComponent } from './custom-search-box.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MediaModule,
    IconModule,
    UrlModule,
    I18nModule,
  ],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        SearchBoxComponent: {
          component: CustomSearchBoxComponent,
        },
      },
    }),
  ],
  declarations: [CustomSearchBoxComponent],
  exports: [CustomSearchBoxComponent],
})
export class CustomSearchBoxModule {}
