/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RsaKeyGenerationRequests } from './RsaKeyGenerationRequests';
import { RsaKeyGenerationRequestsRequestBuilder } from './RsaKeyGenerationRequestsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class RsaKeyGenerationRequestsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RsaKeyGenerationRequests<DeSerializersT>, DeSerializersT>
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
  ): RsaKeyGenerationRequestsApi<DeSerializersT> {
    return new RsaKeyGenerationRequestsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RsaKeyGenerationRequests;

  requestBuilder(): RsaKeyGenerationRequestsRequestBuilder<DeSerializersT> {
    return new RsaKeyGenerationRequestsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RsaKeyGenerationRequests<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RsaKeyGenerationRequests<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RsaKeyGenerationRequests<DeSerializersT>,
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
    typeof RsaKeyGenerationRequests,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RsaKeyGenerationRequests,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RSA_FILE: OrderableEdmTypeField<
      RsaKeyGenerationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIGNATURE_ALGORITHM: OrderableEdmTypeField<
      RsaKeyGenerationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMON_NAME: OrderableEdmTypeField<
      RsaKeyGenerationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_UNIT: OrderableEdmTypeField<
      RsaKeyGenerationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION: OrderableEdmTypeField<
      RsaKeyGenerationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCALITY: OrderableEdmTypeField<
      RsaKeyGenerationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      RsaKeyGenerationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      RsaKeyGenerationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      RsaKeyGenerationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RsaKeyGenerationRequests<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link rsaFile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RSA_FILE: fieldBuilder.buildEdmTypeField('RSAFile', 'Edm.String', true),
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
         * Static representation of the {@link commonName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMON_NAME: fieldBuilder.buildEdmTypeField(
          'CommonName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link organizationUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_UNIT: fieldBuilder.buildEdmTypeField(
          'OrganizationUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link organization} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION: fieldBuilder.buildEdmTypeField(
          'Organization',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link locality} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCALITY: fieldBuilder.buildEdmTypeField(
          'Locality',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', true),
        /**
         * Static representation of the {@link country} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true),
        /**
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RsaKeyGenerationRequests)
      };
    }

    return this._schema;
  }
}
