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
import { DataStoreEntries } from './DataStoreEntries';

/**
 * Request builder class for operations supported on the {@link DataStoreEntries} entity.
 */
export class DataStoreEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DataStoreEntries<T>, T> {
  /**
   * Returns a request builder for querying all `DataStoreEntries` entities.
   * @returns A request builder for creating requests to retrieve all `DataStoreEntries` entities.
   */
  getAll(): GetAllRequestBuilder<DataStoreEntries<T>, T> {
    return new GetAllRequestBuilder<DataStoreEntries<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DataStoreEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DataStoreEntries`.
   */
  create(
    entity: DataStoreEntries<T>
  ): CreateRequestBuilder<DataStoreEntries<T>, T> {
    return new CreateRequestBuilder<DataStoreEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DataStoreEntries` entity based on its keys.
   * @param id Key property. See {@link DataStoreEntries.id}.
   * @param dataStoreName Key property. See {@link DataStoreEntries.dataStoreName}.
   * @param integrationFlow Key property. See {@link DataStoreEntries.integrationFlow}.
   * @param type Key property. See {@link DataStoreEntries.type}.
   * @returns A request builder for creating requests to retrieve one `DataStoreEntries` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>,
    dataStoreName: DeserializedType<T, 'Edm.String'>,
    integrationFlow: DeserializedType<T, 'Edm.String'>,
    type: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DataStoreEntries<T>, T> {
    return new GetByKeyRequestBuilder<DataStoreEntries<T>, T>(this.entityApi, {
      Id: id,
      DataStoreName: dataStoreName,
      IntegrationFlow: integrationFlow,
      Type: type
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DataStoreEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DataStoreEntries`.
   */
  update(
    entity: DataStoreEntries<T>
  ): UpdateRequestBuilder<DataStoreEntries<T>, T> {
    return new UpdateRequestBuilder<DataStoreEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DataStoreEntries`.
   * @param id Key property. See {@link DataStoreEntries.id}.
   * @param dataStoreName Key property. See {@link DataStoreEntries.dataStoreName}.
   * @param integrationFlow Key property. See {@link DataStoreEntries.integrationFlow}.
   * @param type Key property. See {@link DataStoreEntries.type}.
   * @returns A request builder for creating requests that delete an entity of type `DataStoreEntries`.
   */
  delete(
    id: string,
    dataStoreName: string,
    integrationFlow: string,
    type: string
  ): DeleteRequestBuilder<DataStoreEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DataStoreEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DataStoreEntries` by taking the entity as a parameter.
   */
  delete(
    entity: DataStoreEntries<T>
  ): DeleteRequestBuilder<DataStoreEntries<T>, T>;
  delete(
    idOrEntity: any,
    dataStoreName?: string,
    integrationFlow?: string,
    type?: string
  ): DeleteRequestBuilder<DataStoreEntries<T>, T> {
    return new DeleteRequestBuilder<DataStoreEntries<T>, T>(
      this.entityApi,
      idOrEntity instanceof DataStoreEntries
        ? idOrEntity
        : {
            Id: idOrEntity!,
            DataStoreName: dataStoreName!,
            IntegrationFlow: integrationFlow!,
            Type: type!
          }
    );
  }
}
