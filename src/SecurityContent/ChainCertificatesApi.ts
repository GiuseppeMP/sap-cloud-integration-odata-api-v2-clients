/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ChainCertificates } from './ChainCertificates';
import { ChainCertificatesRequestBuilder } from './ChainCertificatesRequestBuilder';
import { KeystoreEntriesApi } from './KeystoreEntriesApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class ChainCertificatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ChainCertificates<DeSerializersT>, DeSerializersT>
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
  ): ChainCertificatesApi<DeSerializersT> {
    return new ChainCertificatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link keystoreEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KEYSTORE_ENTRY: OneToOneLink<
      ChainCertificates<DeSerializersT>,
      DeSerializersT,
      KeystoreEntriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [KeystoreEntriesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      KEYSTORE_ENTRY: new OneToOneLink('KeystoreEntry', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = ChainCertificates;

  requestBuilder(): ChainCertificatesRequestBuilder<DeSerializersT> {
    return new ChainCertificatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ChainCertificates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ChainCertificates<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ChainCertificates<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ChainCertificates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ChainCertificates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    HEXALIAS: OrderableEdmTypeField<
      ChainCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALIAS: OrderableEdmTypeField<
      ChainCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INDEX: OrderableEdmTypeField<
      ChainCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VALIDITY: OrderableEdmTypeField<
      ChainCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KEY_TYPE: OrderableEdmTypeField<
      ChainCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KEY_SIZE: OrderableEdmTypeField<
      ChainCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    VALID_NOT_BEFORE: OrderableEdmTypeField<
      ChainCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALID_NOT_AFTER: OrderableEdmTypeField<
      ChainCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SUBJECT_DN: OrderableEdmTypeField<
      ChainCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ISSUER_DN: OrderableEdmTypeField<
      ChainCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERIAL_NUMBER: OrderableEdmTypeField<
      ChainCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIGNATURE_ALGORITHM: OrderableEdmTypeField<
      ChainCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VERSION: OrderableEdmTypeField<
      ChainCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FINGERPRINT_SHA_1: OrderableEdmTypeField<
      ChainCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINGERPRINT_SHA_256: OrderableEdmTypeField<
      ChainCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINGERPRINT_SHA_512: OrderableEdmTypeField<
      ChainCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link keystoreEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KEYSTORE_ENTRY: OneToOneLink<
      ChainCertificates<DeSerializersT>,
      DeSerializersT,
      KeystoreEntriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ChainCertificates<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link hexalias} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEXALIAS: fieldBuilder.buildEdmTypeField(
          'Hexalias',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link alias} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALIAS: fieldBuilder.buildEdmTypeField('Alias', 'Edm.String', false),
        /**
         * Static representation of the {@link index} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDEX: fieldBuilder.buildEdmTypeField('Index', 'Edm.Int32', false),
        /**
         * Static representation of the {@link validity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDITY: fieldBuilder.buildEdmTypeField(
          'Validity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link keyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY_TYPE: fieldBuilder.buildEdmTypeField('KeyType', 'Edm.String', true),
        /**
         * Static representation of the {@link keySize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY_SIZE: fieldBuilder.buildEdmTypeField('KeySize', 'Edm.Int32', true),
        /**
         * Static representation of the {@link validNotBefore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_NOT_BEFORE: fieldBuilder.buildEdmTypeField(
          'ValidNotBefore',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link validNotAfter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_NOT_AFTER: fieldBuilder.buildEdmTypeField(
          'ValidNotAfter',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link subjectDn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBJECT_DN: fieldBuilder.buildEdmTypeField(
          'SubjectDN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link issuerDn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUER_DN: fieldBuilder.buildEdmTypeField(
          'IssuerDN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'SerialNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link signatureAlgorithm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGNATURE_ALGORITHM: fieldBuilder.buildEdmTypeField(
          'SignatureAlgorithm',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link version} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION: fieldBuilder.buildEdmTypeField('Version', 'Edm.Int32', true),
        /**
         * Static representation of the {@link fingerprintSha1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINGERPRINT_SHA_1: fieldBuilder.buildEdmTypeField(
          'FingerprintSha1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fingerprintSha256} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINGERPRINT_SHA_256: fieldBuilder.buildEdmTypeField(
          'FingerprintSha256',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fingerprintSha512} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINGERPRINT_SHA_512: fieldBuilder.buildEdmTypeField(
          'FingerprintSha512',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ChainCertificates)
      };
    }

    return this._schema;
  }
}
