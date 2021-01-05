import { EntityModel } from '../../entity';
import { SearchModel, SearchResultModel, SearchTypeModel } from '../model';

export abstract class SearchBaseService {
    protected entities: EntityModel[];
    protected languageSupport: any;

    public readonly QUERY_SEPARATOR = ' ';

    protected constructor() {
        this.entities = [];
    }

    public abstract createIndex(
        entities: EntityModel[],
        strict: boolean,
        reference: string
    ): void;
    public abstract enhanceQueryElements(
        queryElements: string[],
        strict: boolean,
        wildcard: string
    ): string[];
    public abstract getDefaultValue(): SearchModel;
    public abstract getSearchTypes(): SearchTypeModel[];
    public abstract search(
        query: string,
        isEnhanced: boolean
    ): SearchResultModel;
}
