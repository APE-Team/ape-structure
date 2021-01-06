import * as lunr from 'lunr';

import { Injectable } from '@angular/core';
import {
    EntityModel,
    SearchBaseService,
    SearchModel,
    SearchResultModel,
    SearchTypeModel,
} from '@ape-api';

@Injectable()
export abstract class ApeSearchService extends SearchBaseService {
    protected index: any;

    protected constructor() {
        super();
    }

    public createIndex(
        entities: EntityModel[],
        strict: boolean = false,
        reference: string = 'uid'
    ): void {
        this.entities = entities;
        this.strict = strict;

        const searchTypes: SearchTypeModel[] = this.getSearchTypes();

        this.index = lunr(function () {
            this.tokenizer.separator = /[\s]+/;

            searchTypes.forEach((searchType) => {
                this.field(searchType.property);
            });

            entities.forEach((entity) => this.add(entity));

            this.ref(reference);
        });
    }

    public search(search: SearchModel): SearchResultModel {
        const queryElements: string[] = this.enhanceQueryElements(
            search.query.split(this.QUERY_SEPARATOR),
            this.WILDCARD
        );

        return {
            result: (this.index as lunr.Index).search(search.query),
        };
    }

    protected addWildcard(query: string, wildcard: string): string {
        return wildcard === '' ? wildcard : `${wildcard}${query}${wildcard}`;
    }

    protected enhanceQueryElements(
        queryElements: string[],
        wildcard: string
    ): string[] {
        if (!this.strict) {
            queryElements.map((element) =>
                element[0] !== '+' && element[0] !== '-'
                    ? this.addWildcard(element, wildcard)
                    : element
            );
        }

        return queryElements;
    }
}
