import { EntityModel } from '../../entity';
import { SearchModel, SearchResultModel, SearchTypeModel } from '../model';

export abstract class SearchBaseService {
    protected readonly QUERY_SEPARATOR = ' ';
    protected readonly WILDCARD = '*';

    protected entities: EntityModel[];
    protected strict: boolean;

    protected constructor() {
        this.entities = [];
        this.strict = false;
    }

    public abstract createIndex(
        entities: EntityModel[],
        strict: boolean,
        reference: string
    ): void;
    public abstract getDefaultValue(): SearchModel;
    public abstract getSearchTypes(): SearchTypeModel[];
    public abstract search(
        search: SearchModel,
        isEnhanced: boolean
    ): SearchResultModel;

    protected abstract enhanceQueryElements(
        queryElements: string[],
        wildcard: string
    ): string[];
}
