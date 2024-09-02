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
import { IntegrationDesigntimeLocks } from './IntegrationDesigntimeLocks';

/**
 * Request builder class for operations supported on the {@link IntegrationDesigntimeLocks} entity.
 */
export class IntegrationDesigntimeLocksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IntegrationDesigntimeLocks<T>, T> {
  /**
   * Returns a request builder for querying all `IntegrationDesigntimeLocks` entities.
   * @returns A request builder for creating requests to retrieve all `IntegrationDesigntimeLocks` entities.
   */
  getAll(): GetAllRequestBuilder<IntegrationDesigntimeLocks<T>, T> {
    return new GetAllRequestBuilder<IntegrationDesigntimeLocks<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `IntegrationDesigntimeLocks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IntegrationDesigntimeLocks`.
   */
  create(
    entity: IntegrationDesigntimeLocks<T>
  ): CreateRequestBuilder<IntegrationDesigntimeLocks<T>, T> {
    return new CreateRequestBuilder<IntegrationDesigntimeLocks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `IntegrationDesigntimeLocks` entity based on its keys.
   * @param resourceId Key property. See {@link IntegrationDesigntimeLocks.resourceId}.
   * @returns A request builder for creating requests to retrieve one `IntegrationDesigntimeLocks` entity based on its keys.
   */
  getByKey(
    resourceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IntegrationDesigntimeLocks<T>, T> {
    return new GetByKeyRequestBuilder<IntegrationDesigntimeLocks<T>, T>(
      this.entityApi,
      { ResourceId: resourceId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `IntegrationDesigntimeLocks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IntegrationDesigntimeLocks`.
   */
  update(
    entity: IntegrationDesigntimeLocks<T>
  ): UpdateRequestBuilder<IntegrationDesigntimeLocks<T>, T> {
    return new UpdateRequestBuilder<IntegrationDesigntimeLocks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IntegrationDesigntimeLocks`.
   * @param resourceId Key property. See {@link IntegrationDesigntimeLocks.resourceId}.
   * @returns A request builder for creating requests that delete an entity of type `IntegrationDesigntimeLocks`.
   */
  delete(
    resourceId: string
  ): DeleteRequestBuilder<IntegrationDesigntimeLocks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IntegrationDesigntimeLocks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IntegrationDesigntimeLocks` by taking the entity as a parameter.
   */
  delete(
    entity: IntegrationDesigntimeLocks<T>
  ): DeleteRequestBuilder<IntegrationDesigntimeLocks<T>, T>;
  delete(
    resourceIdOrEntity: any
  ): DeleteRequestBuilder<IntegrationDesigntimeLocks<T>, T> {
    return new DeleteRequestBuilder<IntegrationDesigntimeLocks<T>, T>(
      this.entityApi,
      resourceIdOrEntity instanceof IntegrationDesigntimeLocks
        ? resourceIdOrEntity
        : { ResourceId: resourceIdOrEntity! }
    );
  }
}
