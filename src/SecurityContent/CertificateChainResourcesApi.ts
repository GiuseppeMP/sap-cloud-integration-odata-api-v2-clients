/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CertificateChainResources } from './CertificateChainResources';
import { CertificateChainResourcesRequestBuilder } from './CertificateChainResourcesRequestBuilder';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class CertificateChainResourcesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CertificateChainResources<DeSerializersT>, DeSerializersT>
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
  ): CertificateChainResourcesApi<DeSerializersT> {
    return new CertificateChainResourcesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link keystoreEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KEYSTORE_ENTRY: OneToOneLink<
      CertificateChainResources<DeSerializersT>,
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

  entityConstructor = CertificateChainResources;

  requestBuilder(): CertificateChainResourcesRequestBuilder<DeSerializersT> {
    return new CertificateChainResourcesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CertificateChainResources<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CertificateChainResources<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CertificateChainResources<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof CertificateChainResources,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CertificateChainResources,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    /**
     * Static representation of the one-to-one navigation property {@link keystoreEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KEYSTORE_ENTRY: OneToOneLink<
      CertificateChainResources<DeSerializersT>,
      DeSerializersT,
      KeystoreEntriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CertificateChainResources<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CertificateChainResources)
      };
    }

    return this._schema;
  }
}
