import { ISPListItem } from './ISPListItem';

/* A mock data source for testing
 * in the local workbench
*/

export class MockList {

    private static items: ISPListItem[] = [{ Title: 'Test List Item', Id: '1' }];

    public static get(restUrl: string, options?: any): ISPListItem[] {
        return this.items;
    }
}