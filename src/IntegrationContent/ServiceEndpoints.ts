/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { ServiceEndpointsApi } from './ServiceEndpointsApi';
import { EntryPoints, EntryPointsType } from './EntryPoints';
import { ApiDefinitions, ApiDefinitionsType } from './ApiDefinitions';
import { CustomTags, CustomTagsType } from './CustomTags';

/**
 * This class represents the entity "ServiceEndpoints" of service "com.sap.hci.api".
 */
export class ServiceEndpoints<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ServiceEndpointsType<T>
{
  /**
   * Technical entity name for ServiceEndpoints.
   */
  static override _entityName = 'ServiceEndpoints';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ServiceEndpoints entity.
   */
  static _keys = ['Id'];
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
  /**
   * Title.
   */
  declare title: DeserializedType<T, 'Edm.String'>;
  /**
   * Version.
   */
  declare version: DeserializedType<T, 'Edm.String'>;
  /**
   * Summary.
   */
  declare summary: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   */
  declare description: DeserializedType<T, 'Edm.String'>;
  /**
   * Last Updated.
   * @nullable
   */
  declare lastUpdated?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Protocol.
   * @nullable
   */
  declare protocol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link EntryPoints} entity.
   */
  declare entryPoints: EntryPoints<T>[];
  /**
   * One-to-many navigation property to the {@link ApiDefinitions} entity.
   */
  declare apiDefinitions: ApiDefinitions<T>[];
  /**
   * One-to-many navigation property to the {@link CustomTags} entity.
   */
  declare customTags: CustomTags<T>[];

  constructor(_entityApi: ServiceEndpointsApi<T>) {
    super(_entityApi);
  }
}

export interface ServiceEndpointsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name?: DeserializedType<T, 'Edm.String'> | null;
  id: DeserializedType<T, 'Edm.String'>;
  title: DeserializedType<T, 'Edm.String'>;
  version: DeserializedType<T, 'Edm.String'>;
  summary: DeserializedType<T, 'Edm.String'>;
  description: DeserializedType<T, 'Edm.String'>;
  lastUpdated?: DeserializedType<T, 'Edm.DateTime'> | null;
  protocol?: DeserializedType<T, 'Edm.String'> | null;
  entryPoints: EntryPointsType<T>[];
  apiDefinitions: ApiDefinitionsType<T>[];
  customTags: CustomTagsType<T>[];
}
