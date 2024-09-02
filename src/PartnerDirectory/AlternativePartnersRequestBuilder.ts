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
import { AlternativePartners } from './AlternativePartners';

/**
 * Request builder class for operations supported on the {@link AlternativePartners} entity.
 */
export class AlternativePartnersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AlternativePartners<T>, T> {
  /**
   * Returns a request builder for querying all `AlternativePartners` entities.
   * @returns A request builder for creating requests to retrieve all `AlternativePartners` entities.
   */
  getAll(): GetAllRequestBuilder<AlternativePartners<T>, T> {
    return new GetAllRequestBuilder<AlternativePartners<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AlternativePartners` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AlternativePartners`.
   */
  create(
    entity: AlternativePartners<T>
  ): CreateRequestBuilder<AlternativePartners<T>, T> {
    return new CreateRequestBuilder<AlternativePartners<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AlternativePartners` entity based on its keys.
   * @param hexagency Key property. See {@link AlternativePartners.hexagency}.
   * @param hexscheme Key property. See {@link AlternativePartners.hexscheme}.
   * @param hexid Key property. See {@link AlternativePartners.hexid}.
   * @returns A request builder for creating requests to retrieve one `AlternativePartners` entity based on its keys.
   */
  getByKey(
    hexagency: DeserializedType<T, 'Edm.String'>,
    hexscheme: DeserializedType<T, 'Edm.String'>,
    hexid: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AlternativePartners<T>, T> {
    return new GetByKeyRequestBuilder<AlternativePartners<T>, T>(
      this.entityApi,
      {
        Hexagency: hexagency,
        Hexscheme: hexscheme,
        Hexid: hexid
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AlternativePartners`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AlternativePartners`.
   */
  update(
    entity: AlternativePartners<T>
  ): UpdateRequestBuilder<AlternativePartners<T>, T> {
    return new UpdateRequestBuilder<AlternativePartners<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AlternativePartners`.
   * @param hexagency Key property. See {@link AlternativePartners.hexagency}.
   * @param hexscheme Key property. See {@link AlternativePartners.hexscheme}.
   * @param hexid Key property. See {@link AlternativePartners.hexid}.
   * @returns A request builder for creating requests that delete an entity of type `AlternativePartners`.
   */
  delete(
    hexagency: string,
    hexscheme: string,
    hexid: string
  ): DeleteRequestBuilder<AlternativePartners<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AlternativePartners`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AlternativePartners` by taking the entity as a parameter.
   */
  delete(
    entity: AlternativePartners<T>
  ): DeleteRequestBuilder<AlternativePartners<T>, T>;
  delete(
    hexagencyOrEntity: any,
    hexscheme?: string,
    hexid?: string
  ): DeleteRequestBuilder<AlternativePartners<T>, T> {
    return new DeleteRequestBuilder<AlternativePartners<T>, T>(
      this.entityApi,
      hexagencyOrEntity instanceof AlternativePartners
        ? hexagencyOrEntity
        : {
            Hexagency: hexagencyOrEntity!,
            Hexscheme: hexscheme!,
            Hexid: hexid!
          }
    );
  }
}
