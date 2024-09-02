/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CertificateSigningRequests } from './CertificateSigningRequests';
import { CertificateSigningRequestsRequestBuilder } from './CertificateSigningRequestsRequestBuilder';
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
export class CertificateSigningRequestsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CertificateSigningRequests<DeSerializersT>, DeSerializersT>
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
  ): CertificateSigningRequestsApi<DeSerializersT> {
    return new CertificateSigningRequestsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link keystoreEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KEYSTORE_ENTRY: OneToOneLink<
      CertificateSigningRequests<DeSerializersT>,
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

  entityConstructor = CertificateSigningRequests;

  requestBuilder(): CertificateSigningRequestsRequestBuilder<DeSerializersT> {
    return new CertificateSigningRequestsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CertificateSigningRequests<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CertificateSigningRequests<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CertificateSigningRequests<DeSerializersT>,
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
    typeof CertificateSigningRequests,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CertificateSigningRequests,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    HEXALIAS: OrderableEdmTypeField<
      CertificateSigningRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link keystoreEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KEYSTORE_ENTRY: OneToOneLink<
      CertificateSigningRequests<DeSerializersT>,
      DeSerializersT,
      KeystoreEntriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CertificateSigningRequests<DeSerializers>>;
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CertificateSigningRequests)
      };
    }

    return this._schema;
  }
}
