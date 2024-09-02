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
import type { SshKeyResourcesApi } from './SshKeyResourcesApi';
import { KeystoreEntries, KeystoreEntriesType } from './KeystoreEntries';

/**
 * This class represents the entity "SSHKeyResources" of service "com.sap.hci.api".
 */
export class SshKeyResources<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SshKeyResourcesType<T>
{
  /**
   * Technical entity name for SshKeyResources.
   */
  static override _entityName = 'SSHKeyResources';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SshKeyResources entity.
   */
  static _keys = [];
  /**
   * One-to-one navigation property to the {@link KeystoreEntries} entity.
   */
  declare keystoreEntry?: KeystoreEntries<T> | null;

  constructor(_entityApi: SshKeyResourcesApi<T>) {
    super(_entityApi);
  }
}

export interface SshKeyResourcesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  keystoreEntry?: KeystoreEntriesType<T> | null;
}
