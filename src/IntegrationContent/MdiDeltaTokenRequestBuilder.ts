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
import { MdiDeltaToken } from './MdiDeltaToken';

/**
 * Request builder class for operations supported on the {@link MdiDeltaToken} entity.
 */
export class MdiDeltaTokenRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MdiDeltaToken<T>, T> {
  /**
   * Returns a request builder for querying all `MdiDeltaToken` entities.
   * @returns A request builder for creating requests to retrieve all `MdiDeltaToken` entities.
   */
  getAll(): GetAllRequestBuilder<MdiDeltaToken<T>, T> {
    return new GetAllRequestBuilder<MdiDeltaToken<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MdiDeltaToken` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MdiDeltaToken`.
   */
  create(entity: MdiDeltaToken<T>): CreateRequestBuilder<MdiDeltaToken<T>, T> {
    return new CreateRequestBuilder<MdiDeltaToken<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MdiDeltaToken` entity based on its keys.
   * @param operation Key property. See {@link MdiDeltaToken.operation}.
   * @param entity Key property. See {@link MdiDeltaToken.entity}.
   * @param version Key property. See {@link MdiDeltaToken.version}.
   * @returns A request builder for creating requests to retrieve one `MdiDeltaToken` entity based on its keys.
   */
  getByKey(
    operation: DeserializedType<T, 'Edm.String'>,
    entity: DeserializedType<T, 'Edm.String'>,
    version: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MdiDeltaToken<T>, T> {
    return new GetByKeyRequestBuilder<MdiDeltaToken<T>, T>(this.entityApi, {
      Operation: operation,
      Entity: entity,
      Version: version
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MdiDeltaToken`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MdiDeltaToken`.
   */
  update(entity: MdiDeltaToken<T>): UpdateRequestBuilder<MdiDeltaToken<T>, T> {
    return new UpdateRequestBuilder<MdiDeltaToken<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MdiDeltaToken`.
   * @param operation Key property. See {@link MdiDeltaToken.operation}.
   * @param entity Key property. See {@link MdiDeltaToken.entity}.
   * @param version Key property. See {@link MdiDeltaToken.version}.
   * @returns A request builder for creating requests that delete an entity of type `MdiDeltaToken`.
   */
  delete(
    operation: string,
    entity: string,
    version: string
  ): DeleteRequestBuilder<MdiDeltaToken<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MdiDeltaToken`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MdiDeltaToken` by taking the entity as a parameter.
   */
  delete(entity: MdiDeltaToken<T>): DeleteRequestBuilder<MdiDeltaToken<T>, T>;
  delete(
    operationOrEntity: any,
    entity?: string,
    version?: string
  ): DeleteRequestBuilder<MdiDeltaToken<T>, T> {
    return new DeleteRequestBuilder<MdiDeltaToken<T>, T>(
      this.entityApi,
      operationOrEntity instanceof MdiDeltaToken
        ? operationOrEntity
        : {
            Operation: operationOrEntity!,
            Entity: entity!,
            Version: version!
          }
    );
  }
}
