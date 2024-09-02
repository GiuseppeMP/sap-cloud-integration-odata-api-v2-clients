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
import { LogFileArchives } from './LogFileArchives';

/**
 * Request builder class for operations supported on the {@link LogFileArchives} entity.
 */
export class LogFileArchivesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LogFileArchives<T>, T> {
  /**
   * Returns a request builder for querying all `LogFileArchives` entities.
   * @returns A request builder for creating requests to retrieve all `LogFileArchives` entities.
   */
  getAll(): GetAllRequestBuilder<LogFileArchives<T>, T> {
    return new GetAllRequestBuilder<LogFileArchives<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LogFileArchives` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LogFileArchives`.
   */
  create(
    entity: LogFileArchives<T>
  ): CreateRequestBuilder<LogFileArchives<T>, T> {
    return new CreateRequestBuilder<LogFileArchives<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LogFileArchives` entity based on its keys.
   * @param scope Key property. See {@link LogFileArchives.scope}.
   * @param logFileType Key property. See {@link LogFileArchives.logFileType}.
   * @param nodeScope Key property. See {@link LogFileArchives.nodeScope}.
   * @returns A request builder for creating requests to retrieve one `LogFileArchives` entity based on its keys.
   */
  getByKey(
    scope: DeserializedType<T, 'Edm.String'>,
    logFileType: DeserializedType<T, 'Edm.String'>,
    nodeScope: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LogFileArchives<T>, T> {
    return new GetByKeyRequestBuilder<LogFileArchives<T>, T>(this.entityApi, {
      Scope: scope,
      LogFileType: logFileType,
      NodeScope: nodeScope
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LogFileArchives`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LogFileArchives`.
   */
  update(
    entity: LogFileArchives<T>
  ): UpdateRequestBuilder<LogFileArchives<T>, T> {
    return new UpdateRequestBuilder<LogFileArchives<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LogFileArchives`.
   * @param scope Key property. See {@link LogFileArchives.scope}.
   * @param logFileType Key property. See {@link LogFileArchives.logFileType}.
   * @param nodeScope Key property. See {@link LogFileArchives.nodeScope}.
   * @returns A request builder for creating requests that delete an entity of type `LogFileArchives`.
   */
  delete(
    scope: string,
    logFileType: string,
    nodeScope: string
  ): DeleteRequestBuilder<LogFileArchives<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LogFileArchives`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LogFileArchives` by taking the entity as a parameter.
   */
  delete(
    entity: LogFileArchives<T>
  ): DeleteRequestBuilder<LogFileArchives<T>, T>;
  delete(
    scopeOrEntity: any,
    logFileType?: string,
    nodeScope?: string
  ): DeleteRequestBuilder<LogFileArchives<T>, T> {
    return new DeleteRequestBuilder<LogFileArchives<T>, T>(
      this.entityApi,
      scopeOrEntity instanceof LogFileArchives
        ? scopeOrEntity
        : {
            Scope: scopeOrEntity!,
            LogFileType: logFileType!,
            NodeScope: nodeScope!
          }
    );
  }
}
