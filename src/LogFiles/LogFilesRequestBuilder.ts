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
import { LogFiles } from './LogFiles';

/**
 * Request builder class for operations supported on the {@link LogFiles} entity.
 */
export class LogFilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LogFiles<T>, T> {
  /**
   * Returns a request builder for querying all `LogFiles` entities.
   * @returns A request builder for creating requests to retrieve all `LogFiles` entities.
   */
  getAll(): GetAllRequestBuilder<LogFiles<T>, T> {
    return new GetAllRequestBuilder<LogFiles<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LogFiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LogFiles`.
   */
  create(entity: LogFiles<T>): CreateRequestBuilder<LogFiles<T>, T> {
    return new CreateRequestBuilder<LogFiles<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `LogFiles` entity based on its keys.
   * @param name Key property. See {@link LogFiles.name}.
   * @param application Key property. See {@link LogFiles.application}.
   * @returns A request builder for creating requests to retrieve one `LogFiles` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>,
    application: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LogFiles<T>, T> {
    return new GetByKeyRequestBuilder<LogFiles<T>, T>(this.entityApi, {
      Name: name,
      Application: application
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LogFiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LogFiles`.
   */
  update(entity: LogFiles<T>): UpdateRequestBuilder<LogFiles<T>, T> {
    return new UpdateRequestBuilder<LogFiles<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LogFiles`.
   * @param name Key property. See {@link LogFiles.name}.
   * @param application Key property. See {@link LogFiles.application}.
   * @returns A request builder for creating requests that delete an entity of type `LogFiles`.
   */
  delete(
    name: string,
    application: string
  ): DeleteRequestBuilder<LogFiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LogFiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LogFiles` by taking the entity as a parameter.
   */
  delete(entity: LogFiles<T>): DeleteRequestBuilder<LogFiles<T>, T>;
  delete(
    nameOrEntity: any,
    application?: string
  ): DeleteRequestBuilder<LogFiles<T>, T> {
    return new DeleteRequestBuilder<LogFiles<T>, T>(
      this.entityApi,
      nameOrEntity instanceof LogFiles
        ? nameOrEntity
        : {
            Name: nameOrEntity!,
            Application: application!
          }
    );
  }
}
