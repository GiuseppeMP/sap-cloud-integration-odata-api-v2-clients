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
import type { ResourcesApi } from './ResourcesApi';

/**
 * This class represents the entity "Resources" of service "com.sap.hci.api".
 */
export class Resources<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ResourcesType<T>
{
  /**
   * Technical entity name for Resources.
   */
  static override _entityName = 'Resources';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Resources entity.
   */
  static _keys = ['Name', 'ResourceType'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Resource Type.
   */
  declare resourceType: DeserializedType<T, 'Edm.String'>;
  /**
   * Referenced Resource Type.
   * @nullable
   */
  declare referencedResourceType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resource Content.
   * @nullable
   */
  declare resourceContent?: DeserializedType<T, 'Edm.Binary'> | null;

  constructor(_entityApi: ResourcesApi<T>) {
    super(_entityApi);
  }
}

export interface ResourcesType<T extends DeSerializers = DefaultDeSerializers> {
  name: DeserializedType<T, 'Edm.String'>;
  resourceType: DeserializedType<T, 'Edm.String'>;
  referencedResourceType?: DeserializedType<T, 'Edm.String'> | null;
  resourceContent?: DeserializedType<T, 'Edm.Binary'> | null;
}
