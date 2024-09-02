/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { KeystoreEntries } from './KeystoreEntries';
import { KeystoreEntriesRequestBuilder } from './KeystoreEntriesRequestBuilder';
import { ChainCertificatesApi } from './ChainCertificatesApi';
import { CertificateResourcesApi } from './CertificateResourcesApi';
import { SshKeyResourcesApi } from './SshKeyResourcesApi';
import { KeystoresApi } from './KeystoresApi';
import { CertificateChainResourcesApi } from './CertificateChainResourcesApi';
import { CertificateSigningRequestsApi } from './CertificateSigningRequestsApi';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class KeystoreEntriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<KeystoreEntries<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): KeystoreEntriesApi<DeSerializersT> {
    return new KeystoreEntriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link chainCertificates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHAIN_CERTIFICATES: Link<
      KeystoreEntries<DeSerializersT>,
      DeSerializersT,
      ChainCertificatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link certificate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CERTIFICATE: OneToOneLink<
      KeystoreEntries<DeSerializersT>,
      DeSerializersT,
      CertificateResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sshkey} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SSHKEY: OneToOneLink<
      KeystoreEntries<DeSerializersT>,
      DeSerializersT,
      SshKeyResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link keystore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KEYSTORE: OneToOneLink<
      KeystoreEntries<DeSerializersT>,
      DeSerializersT,
      KeystoresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chainResource} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHAIN_RESOURCE: OneToOneLink<
      KeystoreEntries<DeSerializersT>,
      DeSerializersT,
      CertificateChainResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link signingRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIGNING_REQUEST: OneToOneLink<
      KeystoreEntries<DeSerializersT>,
      DeSerializersT,
      CertificateSigningRequestsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ChainCertificatesApi<DeSerializersT>,
      CertificateResourcesApi<DeSerializersT>,
      SshKeyResourcesApi<DeSerializersT>,
      KeystoresApi<DeSerializersT>,
      CertificateChainResourcesApi<DeSerializersT>,
      CertificateSigningRequestsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CHAIN_CERTIFICATES: new Link('ChainCertificates', this, linkedApis[0]),
      CERTIFICATE: new OneToOneLink('Certificate', this, linkedApis[1]),
      SSHKEY: new OneToOneLink('Sshkey', this, linkedApis[2]),
      KEYSTORE: new OneToOneLink('Keystore', this, linkedApis[3]),
      CHAIN_RESOURCE: new OneToOneLink('ChainResource', this, linkedApis[4]),
      SIGNING_REQUEST: new OneToOneLink('SigningRequest', this, linkedApis[5])
    };
    return this;
  }

  entityConstructor = KeystoreEntries;

  requestBuilder(): KeystoreEntriesRequestBuilder<DeSerializersT> {
    return new KeystoreEntriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    KeystoreEntries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<KeystoreEntries<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<KeystoreEntries<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof KeystoreEntries, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        KeystoreEntries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TYPE: OrderableEdmTypeField<
      KeystoreEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OWNER: OrderableEdmTypeField<
      KeystoreEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      KeystoreEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_TIME: OrderableEdmTypeField<
      KeystoreEntries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      KeystoreEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_TIME: OrderableEdmTypeField<
      KeystoreEntries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    STATUS: OrderableEdmTypeField<
      KeystoreEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link chainCertificates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHAIN_CERTIFICATES: Link<
      KeystoreEntries<DeSerializersT>,
      DeSerializersT,
      ChainCertificatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link certificate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CERTIFICATE: OneToOneLink<
      KeystoreEntries<DeSerializersT>,
      DeSerializersT,
      CertificateResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sshkey} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SSHKEY: OneToOneLink<
      KeystoreEntries<DeSerializersT>,
      DeSerializersT,
      SshKeyResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link keystore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KEYSTORE: OneToOneLink<
      KeystoreEntries<DeSerializersT>,
      DeSerializersT,
      KeystoresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chainResource} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHAIN_RESOURCE: OneToOneLink<
      KeystoreEntries<DeSerializersT>,
      DeSerializersT,
      CertificateChainResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link signingRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIGNING_REQUEST: OneToOneLink<
      KeystoreEntries<DeSerializersT>,
      DeSerializersT,
      CertificateSigningRequestsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<KeystoreEntries<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEdmTypeField('Type', 'Edm.String', true),
        /**
         * Static representation of the {@link owner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNER: fieldBuilder.buildEdmTypeField('Owner', 'Edm.String', true),
        /**
         * Static representation of the {@link lastModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'LastModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastModifiedTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_TIME: fieldBuilder.buildEdmTypeField(
          'LastModifiedTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link createdBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY: fieldBuilder.buildEdmTypeField(
          'CreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createdTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_TIME: fieldBuilder.buildEdmTypeField(
          'CreatedTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEdmTypeField('Status', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', KeystoreEntries)
      };
    }

    return this._schema;
  }
}
