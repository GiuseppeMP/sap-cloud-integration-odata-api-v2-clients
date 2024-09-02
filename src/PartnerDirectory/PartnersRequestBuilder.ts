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
import { Partners } from './Partners';

/**
 * Request builder class for operations supported on the {@link Partners} entity.
 */
export class PartnersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Partners<T>, T> {
  /**
   * Returns a request builder for querying all `Partners` entities.
   * @returns A request builder for creating requests to retrieve all `Partners` entities.
   */
  getAll(): GetAllRequestBuilder<Partners<T>, T> {
    return new GetAllRequestBuilder<Partners<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Partners` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Partners`.
   */
  create(entity: Partners<T>): CreateRequestBuilder<Partners<T>, T> {
    return new CreateRequestBuilder<Partners<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Partners` entity based on its keys.
   * @param pid Key property. See {@link Partners.pid}.
   * @returns A request builder for creating requests to retrieve one `Partners` entity based on its keys.
   */
  getByKey(
    pid: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Partners<T>, T> {
    return new GetByKeyRequestBuilder<Partners<T>, T>(this.entityApi, {
      Pid: pid
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Partners`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Partners`.
   */
  update(entity: Partners<T>): UpdateRequestBuilder<Partners<T>, T> {
    return new UpdateRequestBuilder<Partners<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Partners`.
   * @param pid Key property. See {@link Partners.pid}.
   * @returns A request builder for creating requests that delete an entity of type `Partners`.
   */
  delete(pid: string): DeleteRequestBuilder<Partners<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Partners`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Partners` by taking the entity as a parameter.
   */
  delete(entity: Partners<T>): DeleteRequestBuilder<Partners<T>, T>;
  delete(pidOrEntity: any): DeleteRequestBuilder<Partners<T>, T> {
    return new DeleteRequestBuilder<Partners<T>, T>(
      this.entityApi,
      pidOrEntity instanceof Partners ? pidOrEntity : { Pid: pidOrEntity! }
    );
  }
}
