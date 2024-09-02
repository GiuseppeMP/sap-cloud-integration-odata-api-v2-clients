/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { AccessPolicies } from './AccessPolicies';

/**
 * Request builder class for operations supported on the {@link AccessPolicies} entity.
 */
export class AccessPoliciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AccessPolicies<T>, T> {
  /**
   * Returns a request builder for querying all `AccessPolicies` entities.
   * @returns A request builder for creating requests to retrieve all `AccessPolicies` entities.
   */
  getAll(): GetAllRequestBuilder<AccessPolicies<T>, T> {
    return new GetAllRequestBuilder<AccessPolicies<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AccessPolicies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AccessPolicies`.
   */
  create(
    entity: AccessPolicies<T>
  ): CreateRequestBuilder<AccessPolicies<T>, T> {
    return new CreateRequestBuilder<AccessPolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AccessPolicies` entity based on its keys.
   * @param id Key property. See {@link AccessPolicies.id}.
   * @returns A request builder for creating requests to retrieve one `AccessPolicies` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<AccessPolicies<T>, T> {
    return new GetByKeyRequestBuilder<AccessPolicies<T>, T>(this.entityApi, {
      Id: id
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AccessPolicies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AccessPolicies`.
   */
  update(
    entity: AccessPolicies<T>
  ): UpdateRequestBuilder<AccessPolicies<T>, T> {
    return new UpdateRequestBuilder<AccessPolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AccessPolicies`.
   * @param id Key property. See {@link AccessPolicies.id}.
   * @returns A request builder for creating requests that delete an entity of type `AccessPolicies`.
   */
  delete(id: BigNumber): DeleteRequestBuilder<AccessPolicies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AccessPolicies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AccessPolicies` by taking the entity as a parameter.
   */
  delete(entity: AccessPolicies<T>): DeleteRequestBuilder<AccessPolicies<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<AccessPolicies<T>, T> {
    return new DeleteRequestBuilder<AccessPolicies<T>, T>(
      this.entityApi,
      idOrEntity instanceof AccessPolicies ? idOrEntity : { Id: idOrEntity! }
    );
  }
}
