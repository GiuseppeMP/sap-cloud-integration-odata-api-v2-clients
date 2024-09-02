/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  GetAllRequestBuilder,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { HistoryKeystoreEntries } from './HistoryKeystoreEntries';

/**
 * Request builder class for operations supported on the {@link HistoryKeystoreEntries} entity.
 */
export class HistoryKeystoreEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HistoryKeystoreEntries<T>, T> {
  /**
   * Returns a request builder for querying all `HistoryKeystoreEntries` entities.
   * @returns A request builder for creating requests to retrieve all `HistoryKeystoreEntries` entities.
   */
  getAll(): GetAllRequestBuilder<HistoryKeystoreEntries<T>, T> {
    return new GetAllRequestBuilder<HistoryKeystoreEntries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `HistoryKeystoreEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HistoryKeystoreEntries`.
   */
  create(
    entity: HistoryKeystoreEntries<T>
  ): CreateRequestBuilder<HistoryKeystoreEntries<T>, T> {
    return new CreateRequestBuilder<HistoryKeystoreEntries<T>, T>(
      this.entityApi,
      entity
    );
  }
}
