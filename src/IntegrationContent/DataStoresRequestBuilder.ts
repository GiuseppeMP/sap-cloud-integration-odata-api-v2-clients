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
import { DataStores } from './DataStores';

/**
 * Request builder class for operations supported on the {@link DataStores} entity.
 */
export class DataStoresRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DataStores<T>, T> {
  /**
   * Returns a request builder for querying all `DataStores` entities.
   * @returns A request builder for creating requests to retrieve all `DataStores` entities.
   */
  getAll(): GetAllRequestBuilder<DataStores<T>, T> {
    return new GetAllRequestBuilder<DataStores<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DataStores` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DataStores`.
   */
  create(entity: DataStores<T>): CreateRequestBuilder<DataStores<T>, T> {
    return new CreateRequestBuilder<DataStores<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `DataStores` entity based on its keys.
   * @param dataStoreName Key property. See {@link DataStores.dataStoreName}.
   * @param integrationFlow Key property. See {@link DataStores.integrationFlow}.
   * @param type Key property. See {@link DataStores.type}.
   * @returns A request builder for creating requests to retrieve one `DataStores` entity based on its keys.
   */
  getByKey(
    dataStoreName: DeserializedType<T, 'Edm.String'>,
    integrationFlow: DeserializedType<T, 'Edm.String'>,
    type: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DataStores<T>, T> {
    return new GetByKeyRequestBuilder<DataStores<T>, T>(this.entityApi, {
      DataStoreName: dataStoreName,
      IntegrationFlow: integrationFlow,
      Type: type
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DataStores`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DataStores`.
   */
  update(entity: DataStores<T>): UpdateRequestBuilder<DataStores<T>, T> {
    return new UpdateRequestBuilder<DataStores<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DataStores`.
   * @param dataStoreName Key property. See {@link DataStores.dataStoreName}.
   * @param integrationFlow Key property. See {@link DataStores.integrationFlow}.
   * @param type Key property. See {@link DataStores.type}.
   * @returns A request builder for creating requests that delete an entity of type `DataStores`.
   */
  delete(
    dataStoreName: string,
    integrationFlow: string,
    type: string
  ): DeleteRequestBuilder<DataStores<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DataStores`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DataStores` by taking the entity as a parameter.
   */
  delete(entity: DataStores<T>): DeleteRequestBuilder<DataStores<T>, T>;
  delete(
    dataStoreNameOrEntity: any,
    integrationFlow?: string,
    type?: string
  ): DeleteRequestBuilder<DataStores<T>, T> {
    return new DeleteRequestBuilder<DataStores<T>, T>(
      this.entityApi,
      dataStoreNameOrEntity instanceof DataStores
        ? dataStoreNameOrEntity
        : {
            DataStoreName: dataStoreNameOrEntity!,
            IntegrationFlow: integrationFlow!,
            Type: type!
          }
    );
  }
}
