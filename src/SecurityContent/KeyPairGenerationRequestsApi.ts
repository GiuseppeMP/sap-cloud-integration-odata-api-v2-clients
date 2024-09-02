/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { KeyPairGenerationRequests } from './KeyPairGenerationRequests';
import { KeyPairGenerationRequestsRequestBuilder } from './KeyPairGenerationRequestsRequestBuilder';
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
export class KeyPairGenerationRequestsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<KeyPairGenerationRequests<DeSerializersT>, DeSerializersT>
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
  ): KeyPairGenerationRequestsApi<DeSerializersT> {
    return new KeyPairGenerationRequestsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = KeyPairGenerationRequests;

  requestBuilder(): KeyPairGenerationRequestsRequestBuilder<DeSerializersT> {
    return new KeyPairGenerationRequestsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    KeyPairGenerationRequests<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      KeyPairGenerationRequests<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    KeyPairGenerationRequests<DeSerializersT>,
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
    typeof KeyPairGenerationRequests,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        KeyPairGenerationRequests,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    KEY_ALGORITHM_PARAMETER: OrderableEdmTypeField<
      KeyPairGenerationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMON_NAME: OrderableEdmTypeField<
      KeyPairGenerationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_UNIT: OrderableEdmTypeField<
      KeyPairGenerationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION: OrderableEdmTypeField<
      KeyPairGenerationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCALITY: OrderableEdmTypeField<
      KeyPairGenerationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      KeyPairGenerationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      KeyPairGenerationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      KeyPairGenerationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<KeyPairGenerationRequests<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link keyAlgorithmParameter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY_ALGORITHM_PARAMETER: fieldBuilder.buildEdmTypeField(
          'KeyAlgorithmParameter',
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
        ALL_FIELDS: new AllFields('*', KeyPairGenerationRequests)
      };
    }

    return this._schema;
  }
}
