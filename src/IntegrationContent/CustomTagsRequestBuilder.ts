/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { CustomTags } from './CustomTags';

/**
 * Request builder class for operations supported on the {@link CustomTags} entity.
 */
export class CustomTagsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomTags<T>, T> {
  /**
   * Returns a request builder for querying all `CustomTags` entities.
   * @returns A request builder for creating requests to retrieve all `CustomTags` entities.
   */
  getAll(): GetAllRequestBuilder<CustomTags<T>, T> {
    return new GetAllRequestBuilder<CustomTags<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomTags` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomTags`.
   */
  create(entity: CustomTags<T>): CreateRequestBuilder<CustomTags<T>, T> {
    return new CreateRequestBuilder<CustomTags<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CustomTags` entity based on its keys.
   * @param name Key property. See {@link CustomTags.name}.
   * @returns A request builder for creating requests to retrieve one `CustomTags` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomTags<T>, T> {
    return new GetByKeyRequestBuilder<CustomTags<T>, T>(this.entityApi, {
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CustomTags`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomTags`.
   */
  update(entity: CustomTags<T>): UpdateRequestBuilder<CustomTags<T>, T> {
    return new UpdateRequestBuilder<CustomTags<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomTags`.
   * @param name Key property. See {@link CustomTags.name}.
   * @returns A request builder for creating requests that delete an entity of type `CustomTags`.
   */
  delete(name: string): DeleteRequestBuilder<CustomTags<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomTags`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomTags` by taking the entity as a parameter.
   */
  delete(entity: CustomTags<T>): DeleteRequestBuilder<CustomTags<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<CustomTags<T>, T> {
    return new DeleteRequestBuilder<CustomTags<T>, T>(
      this.entityApi,
      nameOrEntity instanceof CustomTags
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
